import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({title = '', className, style}: ProductTitleProps) => {

    const { product } = useContext( ProductContext )
    let titleToShow: string;
    if ( title ) {
        titleToShow = title;
    } else {
        titleToShow = product.title;
    }

    return (
        <span
            className={ `${styles.productDescription} ${className}` }
            style={ style }
        >{ titleToShow }</span>
    )
}
