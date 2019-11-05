const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "memoryman",
    database: "bamazon"
});

var products=[]

connection.connect(function (error) {
    if (error) {
        throw error;
    }  });
    
connection.query("SELECT * FROM products", function(error,data){
    if (error){
        throw error;
    }
     data.forEach(element => {
         products.push(element)
     });

     start(products);
})



function start(products) {
    console.log(products)

    //display everthing in table
    inquirer
        .prompt([{
            name: "id",
            type: "list",
            message: "What is the ID of the product you wish to purchase?",
            choices: [products[0].product_name, "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },{
           name: "quantity",
           type:  "input",
           message: "how many would you like to purchase?"
        }]).then(function (answer) {

            let selected= products[answer.id-1]
           if(selected.stock_quantity < answer.quantity){
               console.log("we dont have enough, we only have "+ selected.stock_quantity)
               inquirer
               start(products)
           }else{
               //tell price
                //update inventory
                connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [answer.quantity, answer.id], function(error, response){
                    if(error){
                        throw error;
                    }
                    console.log(response);

                    process.exit(0)
                })
            }
            // switch (answer.id) {
            //     case "1":
            //         console.log("ID = 1")
            //        howmany();
            //         break;

            //     case "2":
            //         console.log("ID = 2")
            //        howmany();

            //         break;
            //     case "3":
            //         console.log("ID = 3")
            //        howmany();
            //         break;
            //     case "4":
            //         console.log("ID = 4")
            //        howmany();
            //         break;
            //     case "5":
            //         console.log("ID = 5")
            //        howmany();
            //         break;
            //     case "6":
            //         console.log("ID = 6")
            //        howmany();
            //         break;
            //     case "7":
            //         console.log("ID = 7")
            //        howmany();
            //         break;
            //     case "8":
            //         console.log("ID = 8")
            //        howmany();
            //         break;
            //     case "9":
            //         console.log("ID = 9")
            //        howmany();
            //         break;
            //     case "10":
            //         console.log("ID = 10")
            //        howmany();
            //         break;

            //     default:
            //         connection.end();
            //         break;
            // }
        })
    };

        function howmany() {
            inquirer
            .prompt({
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                })
                .then(function(answer){
                    const quantity = parseInt(answer.quantity);
                    console.log(quantity);
                })
        }

        // start();