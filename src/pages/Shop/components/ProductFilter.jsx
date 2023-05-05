import React, { useState } from 'react'
import styles from "../../../css/shop/sectionone.module.css";
import { brand_name, colorFilter, tagsfilter } from "../../../helper/Helper";


const ProductFilter = () => {
  const [size,setSize] = useState('')

  let cat = ["Men", "Women", "Kid"];
  let clothsize = ["S", "M", "L", "XL"];
  return (
    <div className={`  ${styles.filters_wrapper}`}>
    <div className={styles.categories_wrap}>
      <h5>Categories</h5>
      <ul>
        {cat.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className={styles.brand_wrap}>
      <h5>Categories</h5>
      {brand_name.map((item, index) => (
        <div className={styles.brand} key={index}>
          <input type="checkbox" id={item} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
    <div className={styles.Pricefilter_wrap}>
      <h5>Price</h5>
      <button>Filter</button>
    </div>
    <div className={styles.colorfilter_wrap}>
      <h5>Color</h5>
      <ul>
        {colorFilter.map((item, index) => (
          <li key={index}>
            <span
              className={styles.color_circle}
              style={{ backgroundColor: item.hex }}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.sizefilter_wrap}>
      <h5>Size</h5>
      <div className={styles.size_boxes_wrapper}>
        {clothsize.map((item, index) => (
          <div className={    `${item == size && styles.box_active} ${styles.size_box}`} key={index} onClick={()=> setSize(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.tagsfilter_wrap}>
      <h5>Tags</h5>
      <div className={styles.tags_wrap}>
        {tagsfilter.map((item, index) => (
          <div className={styles.tags} key={index} onClick={()=> setSize(item)}>
            {item}
          </div>
        ))}
        </div>
    </div>
  </div>
  )
}

export default ProductFilter