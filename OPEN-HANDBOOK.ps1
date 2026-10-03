# Windows helper: start the local mirror (Node) and open the single-page handbook.
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$url = 'http://127.0.0.1:8786/en-us/news/7013'
try { $null = Invoke-WebRequest -Uri 'http://127.0.0.1:8786/original/routes.json' -Method Head -TimeoutSec 2 }
catch { Start-Process -FilePath 'node' -ArgumentList @('tools/serve.mjs', '8786') -WorkingDirectory $root -WindowStyle Hidden; Start-Sleep -Seconds 1 }
Start-Process $url
