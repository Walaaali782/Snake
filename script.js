const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;
let speed = 100;
let score = 0;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };

function drawGame() {
    updateSnake();
    if (isGameOver()) {
        alert(`Game Over! Your score: ${score}`);
        document.location.reload();
    }
    clearCanvas();
    drawFood();
    drawSnake();
    setTimeout(drawGame, speed);
}

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateSnake() {
    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(newHead);
    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        speed = Math.max(50, speed - 5); // Increase speed
        food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
    } else {
        snake.pop();
    }
}

function isGameOver() {
    const head = snake[0];
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

drawGame();





































// console.log(Redux);


// const Wirthdraw_mAny  =  "Wirthdraw-mAny";

// const Desponsite_mAny  =   "Desponsite-mAny";
// const Addproduct  =   "ADD-PRODUCT";

// const wirthdraw = (amount) => {
//     return {
//         type:  Wirthdraw_mAny,
//         payload:amount
//     }
// }


// const deposite = function (amount) {
//     return {
//         type: Desponsite_mAny ,
//         payload:amount
//     }
// }

// const Addpro = function (product) {
//     return {
//         type: Addproduct ,
//         payload:product
//     }
// }


// const bankreducer = (state = 1000 , action ) => {
//     switch (action.type) {
//         case  Wirthdraw_mAny:
//             return state - action.payload;
//         case Desponsite_mAny:
//             return state + action.payload;  
//         default:
//             return state;
//     }

// }


// const productreducer = (state = [] , action ) => {
//     switch (action.type) {
//         case Addproduct:
//             return [...state, action.payload] ;
//         default:
//             return state;
//     }

// }




// const compine = Redux.combineReducers({
//     bank:bankreducer,
//     products:productreducer



// })

// // const store = Redux.createStore(bankreducer);
// const store = Redux.createStore(compine);



// store.dispatch(Addpro({id:1, title:'product_1'}));



// store.dispatch(wirthdraw(100));
// store.dispatch(wirthdraw(200));
// store.dispatch(deposite(2000));

// console.log(store.getState());


// store.subscribe(()=>{
//     console.log( "current value " , store.getState());
// })

////////////////////////////////////////////////////////////////ststic //////////////////////


// console.log(Redux);
// console.log(ReduxThunk);


// const Wirthdraw_mAny  =  "Wirthdraw-mAny";

// const Desponsite_mAny  =   "Desponsite-mAny";
// const Addproduct  =   "ADD-PRODUCT";
// const Getproduct = "Getproduct";


// const wirthdraw = (amount) => {
//     return {
//         type:  Wirthdraw_mAny,
//         payload:amount
//     }
// }


// const deposite = function (amount) {
//     return {
//         type: Desponsite_mAny ,
//         payload:amount
//     }
// }

// const Addpro = function (product) {
//     return {
//         type: Addproduct ,
//         payload:product
//     }
// }


// const fetchpro = (products) => {
//     return{
//         type: Getproduct ,
//         payload:products
//     }
// }



// const getproduct = () => {

//     return async (dispatch) =>  {
//         const res =await fetch('https://fakestoreapi.com/products');
//         const data =  await res.json();
//         console.log(data);
//         dispatch(fetchpro(data))
//     }

// } 

// const bankreducer = (state = 1000 , action ) => {
//     switch (action.type) {
//         case  Wirthdraw_mAny:
//             return state - action.payload;
//         case Desponsite_mAny:
//             return state + action.payload;  
//         default:
//             return state;
//     }

// }




// const productreducer = (state = [] , action ) => {
//     switch (action.type) {
//         case Getproduct:
//             return [...action.payload] ;
//         default:
//             return state;
//     }

// }




// const compine = Redux.combineReducers({
//     bank:bankreducer,
//     products:productreducer



// })

// // const store = Redux.createStore(bankreducer);
// const store = Redux.createStore(compine , Redux.applyMiddleware(ReduxThunk));



// store.dispatch(Addpro({id:1, title:'product_1'}));



// store.dispatch(wirthdraw(100));
// store.dispatch(wirthdraw(200));
// store.dispatch(deposite(2000));

// console.log(store.getState());

// store.dispatch(getproduct());



// store.subscribe(()=>{
//     console.log( "current value " , store.getState());
// })



// let amountinput  = document.querySelector("#amount");
// let amountvalue  = document.querySelector("#value");
// amountvalue.innerHTML = store.getState().bank;
// document.querySelector("#Wirthdraw").addEventListener('click' , () =>{
//     store.dispatch(wirthdraw(+amountinput.value));
// })
// document.querySelector("#Desponsite").addEventListener('click' , () =>{
//     store.dispatch(deposite(+amountinput.value));
// })


// store.subscribe(()=>{
//     console.log( "current value " , store.getState());
//     amountvalue.innerHTML = store.getState().bank;

// })


