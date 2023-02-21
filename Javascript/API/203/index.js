const shoppingList = ['apples', 'biscuits', 'cabbage', 'dip'];
const isCode200 = () => Math.random() >= 0.5;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isCode200()) {
        resolve(shoppingList);
      } else {
        reject('There was a problem with the server, please try again.');
      }
    }, 500);
  });
}

async function getShoppingList() {
  console.log('initiating async call...');
  const result = await getData().catch(err => console.log(`ERR: ${err}`));
  console.log(result);
}

getShoppingList();