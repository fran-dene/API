const clpInput = document.querySelector('#inputCoin');
const coinSelection = document.querySelector('#coinSelection');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const url = 'https://mindicador.cl/api';

const getInfoCoin = async (url) => {
    const ans = await fetch(url);
    const data = await ans.json();
    return data;
};

btn.addEventListener('click' ,async () => {
    if (clpInput.value == '') return alert('Ingrese un valor');

    const divisa = await getInfoCoin(`${url}/${coinSelection.value}`)
})

