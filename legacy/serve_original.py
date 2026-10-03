"""Local-only server for the original site pages and single-page handbook."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
import json, argparse

ROOT = Path(__file__).resolve().parent
ROUTES = json.loads((ROOT/'original/routes.json').read_text(encoding='utf-8'))
class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(ROOT),**kwargs)
    def do_GET(self):
        parsed=urlsplit(self.path)
        path=parsed.path.rstrip('/') or '/'
        if path in ('/','/handbook','/handbook/index.html','/mood-board.html'):
            self.send_response(302);self.send_header('Location','/en-us/news/7013');self.end_headers();return
        if path in ('/starter','/starter/index.html'):
            self.send_response(302);self.send_header('Location','/en-us');self.end_headers();return
        if path in ROUTES:
            if self.headers.get('RSC')=='1':
                headers={key:value for key,value in self.headers.items() if key.lower() in ('rsc','next-router-state-tree','next-router-prefetch','next-url','accept')}
                try:
                    with urlopen(Request('https://endfield.gryphline.com'+self.path,headers=headers),timeout=30) as response:
                        body=response.read();ctype=response.headers.get('Content-Type','text/x-component')
                except Exception:
                    self.send_error(502,'Original route is temporarily unavailable');return
            else:
                body=(ROOT/ROUTES[path]).read_bytes();ctype='text/html; charset=utf-8'
            self.send_response(200);self.send_header('Content-Type',ctype)
            self.send_header('Content-Length',str(len(body)));self.send_header('Cache-Control','no-store')
            self.end_headers();self.wfile.write(body);return
        super().do_GET()
    def log_message(self,format,*args): pass

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=8786);args=parser.parse_args()
    server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler)
    print(f'Handbook: http://127.0.0.1:{args.port}/en-us/news/7013',flush=True)
    print(f'Original home: http://127.0.0.1:{args.port}/en-us',flush=True)
    server.serve_forever()
