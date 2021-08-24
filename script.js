/*Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

const student = {
    school: 'Skill Factory'
}

let obj = Object.create(student)

obj.name = 'Zhupar'
obj.age = 31




function printObj(obj){
    // console.log(obj)
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key + ' - ' + obj[key])
        }
    }
}

printObj(obj)

/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

function hasProperty(string, object){
    for (let key in object){
        if (object.hasOwnProperty(key) && key === string){            
            return true
        }
    }return false
}

console.log(hasProperty('name', obj)) //true
console.log(hasProperty('school', obj)) //false
console.log(hasProperty('city', obj)) //false

/*Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.*/

function createEmptyObject (){
    let emptyObject = Object.create(null)
    console.log(emptyObject)
}

createEmptyObject()

/*Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElectricalAppliance (type,flag){
    this.type = type,
    this.flag = flag
}

ElectricalAppliance.prototype.status = function (){
    if (this.flag){
        return('The device is on');
    }else{
        return('The device is off');
    }    
}

Computer.prototype = new ElectricalAppliance('computers', true);
Microwave.prototype = new ElectricalAppliance('household appliances', false);


function Computer(cpu, ram, driveType){
    this.cpu = cpu,
    this.ram = ram,
    this.driveType = driveType
}

Computer.prototype.getSpecifications = function(){
    return (`Specifications:\n CPU: ${this.cpu}, RAM size:${this.ram} Gb, Drive type: ${this.driveType}`)
}

function Microwave(name, power, volume, rotaryTableDiameter){
    this.name = name,
    this.power = power,
    this.volume = volume,
    this.rotaryTableDiameter = rotaryTableDiameter
}

Microwave.prototype.getSpecifications = function(){
   return (`Specifications:\n ${this.name} Microwave power: ${this.power}W, Volume: ${this.volume} l, Rotary table diameter: ${this.rotaryTableDiameter} mm`)
}

/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.*/

//названия классов и функций-конструкторов совпадают. Нужно закомментировать функции, чтобы увидеть результат работы классов.

// class ElectricalAppliance {
//     constructor(type, flag) {
//         this.type = type;
//         this.flag = flag;
//     }
//     status() {
//         if (this.flag) {
//             return ('The device is on');
//         } else {
//             return ('The device is off');
//         }
//     }
// }

// class Computer extends ElectricalAppliance{    
//     constructor(cpu, ram, driveType, type, flag){
//         super(type, flag);
//         this.cpu = cpu;
//         this.ram = ram;
//         this.driveType = driveType;
//     }
//     getSpecifications(){
//         return (`Specifications:\n CPU: ${this.cpu}, RAM size:${this.ram} Gb, Drive type: ${this.driveType}`);
//     }
// }

// class Microwave extends ElectricalAppliance{
//     constructor(name, power, volume, rotaryTableDiameter, type, flag){
//         super(type, flag);
//         this.name = name;
//         this.power = power;
//         this.volume = volume;
//         this.rotaryTableDiameter = rotaryTableDiameter;
//     }
//     getSpecifications(){
//         return (`Specifications:\n ${this.name} Microwave power: ${this.power}W, Volume: ${this.volume} l, Rotary table diameter: ${this.rotaryTableDiameter} mm`);
//      }
// }


const pc1 = new Computer('Intel Core i7-10th 2.9GHz', 16.0, 'HDD', 'computers', true );
const pc2 = new Computer('Intel Core i3-10th 3.6GHz', 8.0, 'SSD', 'computers', false);
const mw1 = new Microwave('Electrolux EMM-20000OC', 700, 20, 245, 'household appliances', false);
const mw2 = new Microwave('Samsung MS-23F301TAW/BW', 800, 23, 255, 'household appliances', true);
console.log(pc1.type);
console.log(pc1.status());
console.log(pc1.getSpecifications());
console.log(pc2.type);
console.log(pc2.status());
console.log(pc2.getSpecifications());
console.log(mw1.type);
console.log(mw1.status());
console.log(mw1.getSpecifications());
console.log(mw2.type);
console.log(mw2.status());
console.log(mw2.getSpecifications());






