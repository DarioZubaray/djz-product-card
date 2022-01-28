# DJZ-Product-Card

este un paquete de pruebas de despliegues de NPM

### ejemplo
```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'djz-product-card
```

```
<ProductCard
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```


## DJZ es Darío Jóse Zubaray