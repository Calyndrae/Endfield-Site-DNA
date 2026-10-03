/**
 * Semantic reconstruction of module 50999 in the official operator page chunk.
 * This is readable reference code, not a drop-in replacement for the site's
 * compiled bundle: imports, styles and localization APIs are expressed by role.
 * All local identifiers in this reconstruction use meaningful names.
 */
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const professionOptions = ["guard", "caster", "support", "shielder", "vanguard", "assault"];
const elementOptions = ["fire", "ice", "electric", "nature", "physic"];
const nameFont = '"SansBold", sans-serif';
let measurementCanvas = null;

function measureOperatorName(text, fontSizePx) {
  measurementCanvas ??= document.createElement("canvas");
  const context = measurementCanvas.getContext("2d");
  if (!context) return 0;
  context.font = `${fontSizePx}px ${nameFont}`;
  return context.measureText(text).width;
}

function fitOperatorName(text, rootFontSizePx) {
  const availableWidthPx = 11.1875 * rootFontSizePx;
  let minimumRem = 0.5625;
  let maximumRem = 1.6875;
  for (let step = 0; step < 28; step += 1) {
    const candidateRem = (minimumRem + maximumRem) / 2;
    if (measureOperatorName(text, candidateRem * rootFontSizePx) <= availableWidthPx) {
      minimumRem = candidateRem;
    } else {
      maximumRem = candidateRem;
    }
  }
  return minimumRem;
}

export function OperatorCard({ operator, visibleIndex, totalOperators, onSelect }) {
  const nameContainer = useRef(null);
  const [nameSizeRem, setNameSizeRem] = useState(1.6875);

  useLayoutEffect(() => {
    if (!nameContainer.current) return undefined;
    const updateNameSize = () => {
      const rootFontSizePx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      setNameSizeRem(fitOperatorName(operator.name, rootFontSizePx));
    };
    updateNameSize();
    Promise.all([
      document.fonts.ready,
      document.fonts.load(`${1.6875 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16)}px ${nameFont}`),
    ]).then(updateNameSize);
    const sizeObserver = new ResizeObserver(updateNameSize);
    sizeObserver.observe(nameContainer.current);
    return () => sizeObserver.disconnect();
  }, [operator.name]);

  return (
    <button className="operator-card" onClick={() => onSelect(operator.key)}>
      <div className="operator-card__image" data-key={operator.key}
        style={operator.portrait ? { backgroundImage: `url(${operator.portrait})` } : undefined} />
      <div className="operator-card__content" data-rarity={operator.rarity}>
        <div className="operator-card__name" ref={nameContainer}>
          <span style={{ fontSize: `${nameSizeRem}rem` }}>{operator.name}</span>
        </div>
        <div className="operator-card__subtitle">
          <span>{`// ${operator.codename}`}</span>
          <span>{`${String(visibleIndex + 1).padStart(2, "0")} / ${totalOperators}`}</span>
        </div>
        <div className="operator-card__icons">
          <span data-key={operator.prof} />
          <span data-key={operator.elem} />
        </div>
      </div>
    </button>
  );
}

export function OperatorFilter({ type, options, value, onChange, translate }) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const selectedOption = options.find((option) => option === value);

  React.useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!container.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  function choose(nextValue) {
    onChange(nextValue);
    setIsOpen(false);
  }

  return (
    <div className={`operator-filter operator-filter--${type}`} ref={container}>
      <div className="operator-filter__trigger" role="button" tabIndex={0}
        aria-haspopup="listbox" aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen((current) => !current);
          }
          if (event.key === "Escape") setIsOpen(false);
        }}>
        <span>{translate(`operator.filter.${type}`)}</span>
        <span className="operator-filter__icon" data-key={selectedOption ?? "none"} />
      </div>
      <div className="operator-filter__panel" role="listbox" aria-hidden={!isOpen}>
        <div role="option" aria-selected={value === null} onClick={() => choose(null)}>
          {translate("operator.filter.all")}
        </div>
        {options.map((option) => (
          <div role="option" aria-selected={option === value} key={option}
            onClick={() => choose(option)}>
            <span data-key={option} />{translate(`operator.${type}.${option}`)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function OperatorListSection({ operators, translate, DetailView }) {
  const [detailVisible, setDetailVisible] = useState(false);
  const [selectedOperatorIndex, setSelectedOperatorIndex] = useState(0);
  const [professionFilter, setProfessionFilter] = useState(null);
  const [elementFilter, setElementFilter] = useState(null);

  const filteredOperators = useMemo(() => operators.filter((operator) =>
    (!professionFilter || operator.prof === professionFilter) &&
    (!elementFilter || operator.elem === elementFilter)),
  [operators, professionFilter, elementFilter]);

  const openDetail = useCallback((key) => {
    const indexInFullList = operators.findIndex((operator) => operator.key === key);
    setSelectedOperatorIndex(indexInFullList === -1 ? 0 : indexInFullList);
    setDetailVisible(true);
  }, [operators]);

  const fade = { initial: { opacity: 0 }, animate: { opacity: 1 },
    exit: { opacity: 0 }, transition: { duration: 0.3, ease: "easeOut" } };

  return (
    <section className="operator-index">
      <AnimatePresence mode="wait">
        {detailVisible ? (
          <motion.div className="operator-index__detail" key="detail" {...fade}>
            <DetailView detailMode detailIndex={selectedOperatorIndex}
              detailBack={() => setDetailVisible(false)} />
          </motion.div>
        ) : (
          <motion.div className="operator-index__list-view" key="list" {...fade}>
            <div className="operator-index__background" aria-hidden="true">
              <span>ENDFIELD</span><div className="operator-index__right-strip" />
            </div>
            <div className="operator-index__filters">
              <OperatorFilter type="prof" options={professionOptions}
                value={professionFilter} onChange={setProfessionFilter} translate={translate} />
              <OperatorFilter type="elem" options={elementOptions}
                value={elementFilter} onChange={setElementFilter} translate={translate} />
            </div>
            <div className="operator-index__scroll-area">
              <div className="operator-index__cards">
                {filteredOperators.map((operator, visibleIndex) => (
                  <OperatorCard key={operator.key} operator={operator}
                    visibleIndex={visibleIndex} totalOperators={operators.length}
                    onSelect={openDetail} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
