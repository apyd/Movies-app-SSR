import React, { FC } from "react";
import classNames from "classnames/bind";
import { IFilterProps } from "./Filter.types";
import styles from "./Filter.module.scss";

const cx = classNames.bind(styles);

export const Filter: FC<IFilterProps> = ({
  name,
  selected,
  label,
  value,
  onFilterSelect,
}) => {
  return (
    <div className={cx("filter")}>
      <input
        id={name + label}
        type="radio"
        name={name}
        value={value}
        checked={value === selected}
        className={cx("filter__input")}
      />
      <label
        tabIndex={0}
        className={cx("filter__label")}
        onClick={onFilterSelect}
        htmlFor={name + label}
      >
        {label}
      </label>
    </div>
  );
};
