import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUniversity } from "../../actions";
import styles from "./SelectUniversity.module.css";
import { universityList } from "../../data/universityList";

function SelectUniversity() {
  const dispatch = useDispatch();

  const [university, setUniversity] = useState(
    useSelector((state) => state.university)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(changeUniversity(university));
  }, [university]);

  const handleSelectUniversity = (event) => {
    setUniversity(event.target.textContent);
    setIsMenuOpen(false);
  };

  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const optionsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  if (isMenuOpen) {
    return (
      <div className={styles.selectUniversity}>
        Образовательное учреждение
        <div className={styles.dropDownMenu} ref={optionsRef}>
         <div className={styles.selectOpen} onClick={handleIsMenuOpen}>
            <span className={styles.span}>{university}</span>
          </div>
          <div className={styles.options}>
            {universityList.map((universityItem) => (
              <div className={styles.selectItem} onClick={handleSelectUniversity}>
                <span className={styles.span}>{universityItem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.selectUniversity}>
      Образовательное учреждение
      <div className={styles.select} onClick={handleIsMenuOpen}>
        <span className={styles.span}>{university}</span>
      </div>
      {university === "" && (
        <p className={styles.error}>Выберите образовательное учреждение</p>
      )}
    </div>
  );
}

export default SelectUniversity;
