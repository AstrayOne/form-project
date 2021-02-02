import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { changeUniversity } from "@actions";
import Error from "@components/Error";
import styles from "@components/SelectUniversity/SelectUniversity.module.css";

function SelectUniversity(props) {
  const dispatch = useDispatch();
  const { name, value, options, onChange } = props;

  const [university, setUniversity] = useState(value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    onChange(university);
    dispatch(changeUniversity(university));
  }, [university]);

  useEffect(() => {
    setUniversity(value);
  }, [value]);

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
            {options.map((option) => (
              <div className={styles.selectItem} onClick={handleSelectUniversity}>
                <span className={styles.span}>{option}</span>
            </div>
          ))}
        </div>
        }
        {!isMenuOpen && <ErrorMessage name={name} component={Error} />}
      </div>
    </div>
  );
}

SelectUniversity.defaultProps = {
  name: "",
  value: "",
  options: [],
  onChange: () => {},
};

SelectUniversity.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default SelectUniversity;
