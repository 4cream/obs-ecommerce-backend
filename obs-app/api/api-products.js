import fs from 'fs/promises';

const getProductsData = async () => {
    try {
        const data = await fs.readFile('./obs-app/api/dummy-products.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log("Ha ocurido un error = ", error);
    }
};

const productData = await getProductsData();

export {productData};