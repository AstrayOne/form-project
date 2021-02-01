import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import { changeUniversity } from "../../../actions";
import styles from "./SelectUniversity.module.css";
import { universityList } from "../../../constants/universityList";

function SelectUniversity() {
  const dispatch = useDispatch();
  const stateUniversity = useSelector((state) => state.university);

  const [university, setUniversity] = useState(stateUniversity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(changeUniversity(university));
  }, [university]);

  useEffect(() => {
    setUniversity(stateUniversity);
  }, [stateUniversity]);

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

  const cn = classNames.bind(styles);

  const selectUniversityClassNames = cn({
    selectOpen: isMenuOpen,
    select: !isMenuOpen,
  });

  return (
    <div className={styles.selectUniversity}>
      Образовательное учреждение
      <div className={styles.dropDownMenu} ref={optionsRef}>
        <div className={selectUniversityClassNames} onClick={handleIsMenuOpen}>
          <span className={styles.span}>{university}</span>
        </div>
        {isMenuOpen && 
          <div className={styles.options}>
            {universityList.map((universityItem) => (
              <div className={styles.selectItem} onClick={handleSelectUniversity}>
                <span className={styles.span}>{universityItem}</span>
            </div>
          ))}
        </div>
      }
      </div>
    </div>
  );

  // if (isMenuOpen) {
  //   return (
  //     <div className={styles.selectUniversity}>
  //       Образовательное учреждение
  //       <div className={styles.dropDownMenu} ref={optionsRef}>
  //        <div className={styles.selectOpen} onClick={handleIsMenuOpen}>
  //           <span className={styles.span}>{university}</span>
  //         </div>
  //         <div className={styles.options}>
  //           {universityList.map((universityItem) => (
  //             <div className={styles.selectItem} onClick={handleSelectUniversity}>
  //               <span className={styles.span}>{universityItem}</span>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className={styles.selectUniversity}>
  //     Образовательное учреждение
  //     <div className={styles.select} onClick={handleIsMenuOpen}>
  //       <span className={styles.span}>{university}</span>
  //     </div>
  //   </div>
  // );


}

export default SelectUniversity;
