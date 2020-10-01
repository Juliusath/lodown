'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * idenitiy: Desinged to return a value unchanged
 * @param {*} value: the value to be returned from this function
 * @returns{*} The value unchanged
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to return data type of a value
 * 
 * @param {*} value : any data type value
 * @returns {string}: the datatype of the input value
 */

function typeOf(value){
    if(value === null){
        return "null" ;      
    }else if(Array.isArray(value)){
        return "array";
    }else if(value === undefined){
        return "undefined";
    }
  
    return typeof value; 
}
module.exports.typeOf = typeOf;

/*first: Designed to iterate over an array and return the first "n" elements in array
*
*@param{array} array: the array over which to iterate
*@param{number} : the amount of elements to return starting with index 0
*@return{array}: an array containing designated elements
*/

function first(array, number){  
    let x = [];                     
    if(!Array.isArray(array) || number < 0 ){ 
        return x;                               
    }else if (Number.isNaN(number) || !number){ 
        return array[0];                        
    }
        
            return array.slice(0, number); 
        }
    
module.exports.first = first;

/*last: Designed to iterate over an array and return the last "n" elements in array
*
*@param{array} array: the array over which to iterate
*@param{number}: the amount of elements to return starting from the end of the array and moving down
*@return{array}: an array containing designated elements
*/
function last(array, number){  
    let x = [];                     
    if(!Array.isArray(array) || number < 0 ){ 
        return x;                               
    }else if (Number.isNaN(number) || !number){ 
        return array[array.length-1];   
    } else if(number > array.length){
        return array;
    }
        
            return array.slice(number - 1 , array.length + 1); 
        }
module.exports.last = last;

/*indexOf: Desgined to iterate over an array and  return the index of the first occurance of a value in an array
*@param{array} array: the array over which to be iterated
*@param{value}: the value to find in the array
*@return{number): the index number of the given value
*/
function indexOf(array, value){         
    for(let i = 0; i < array.length; i++){ 
        if(array[i] === value){             
        return i;                       
        }
} return -1;                                
}
module.exports.indexOf =indexOf;

/*contains: designed to iterate over an array for a given value and return true if present/false if not
*@param{array} array: the array to be iterated over
*@param{*} value: the value to find in the array
*@return{boolean}: return true if value is present. false if not
*/

function contains(array, value){    
    for(let i = 0; i < array.length; i++){  
        return (array.includes(value) ? true : false);
      }
    }
module.exports.contains = contains;

/*unique: designed to iterate over an array and remove duplicate elements
*@param{array}: the array that will be iterated over
*@returns{array}: new array with duplicate elements removed
*/

function unique(array){         // create unique funtion
    let unique = [];                // create empty array to hold return
    for(let i = 0; i < array.length; i++){  // loop through argument array
        if (!unique.includes(array[i])){ // if empty array doesn't have element
            unique.push(array[i]); // push element into empty array
        } 
        
    }return unique;  // return new array
}
module.exports.unique = unique;

/**
 * filter: Designed to iterate over an array and apply <function> to each element
 * 
 * @param {Array} array : Collection to iterate through.
 * @param {function} test : function to apply to each element, index, array
 * 
 * @return {array}: returns a new array of all values for which the <function> returned true.
 * 
 */

function filter(array, test) {
    let newArray = [];
    each(array, function(e, i, a) {
      let result = test(e, i, a);
      if (result === true) {
        newArray.push(e);
      }
    });
    return newArray;
} 
module.exports.filter = filter;

/**
 * reject: Designed to loop over an array and apply <function> to each value in array
 * and return the values that the function call returned false into a new array.
 * 
 * @param {array} array : the array that will be iterated ver.
 * @param {Function} test :  function to apply to each element, index, array.
 * 
 * @return {array}  : returns a new array of all values for which the test function returned false.
 * 
 */
function reject(array, test){   
    let newArray = [];
    each(array, function(e, i, a) {
      let result = test(e, i, a);
      if (result === false) {
        newArray.push(e);
      }
    });
    return newArray;
}
module.exports.reject = reject;

/**
 * partition: Designed to iterate over an array and create a new array of two new arrays. A function is run over the argumetn array and 
 * all values that return truthy are pushed into one of the new sub arrays and false values are pushed into the other
 * for which <functon> returned falsy and the other filled with values for which <function> returned truthy values.
 * Returns the new array with the sub truthy/falsey sub arrays. 
 * 
 * @param {Array} array : array to iterate over
 * @param {Function} test:the function to be applied to the elements in the array, seperateing truthy and falsy values
 * 
 * 
 * @return {array} newArray : returns two nested arrays, one with truthy and the other with falsey values
 * 
 */
function partition(array, test){  
    // create empty array to hold output
const newArr = [[], []];
// call _.each pass array and anonymus fuction
each(array,function(e, i, a){
//conditional to push positive value into array at index 0 
    if(test(e, i, a)){
        newArr[0].push(e);
    }// or else push into array at index 1
    else newArr[1].push(e);
});//return new array
    return newArr;
}
module.exports.partition = partition;

/**
  * map: Designed to iterate over a collection and push all values that returned true into a new array
  * 
  * @param {array or object} collection  : collection that will be iterated over
  * @param {Function} test : function to run on each element or property in the collection 
  * 
  * @return {array} : returns a neew array with all values that were evaluted true by the function
  * 
 */ 
 
function map (collection, test) {
    var newArray = [];
    if (Array.isArray(collection)) {
       for (let i = 0; i < collection.length; i++) {
           newArray.push(test(collection[i], i, collection));
       }
    } else {
        for (let key in collection) {
               newArray.push(test(collection[key], key, collection));
        }
    } return newArray;
}
module.exports.map = map;

/**
 * pluck: Designed to iterate through an array of objects and retrieve the 
 * value of calling the function on a given property.
 * 
 * @param {Array} array : the array of objects to iterate over
 * @param {String} property : key values of an object nested in the array
 * 
 * reutrn {array} : an array containing the value of "property" for each object in the array
 * 
*/

function pluck(array, property){
return map(array, function(e, i, a){
      return (e[property]);
       }); 
}
module.exports.pluck = pluck;

/**
 * every: Designed to iterate through a collection and call function to the every element in the collection. Function will determine
 * if each value evaluates to true
 * 
 * @param {array or object} collection : Collection to iterate over
 * @param {Function} test : function to call for each value in the collection
 * 
 * @return {boolean}: returns true if the value of the function call for all elements are true or if no function is given, 
 * returns false if  one element is false.
 * 
*/
function every(collection, test) {
    if (typeof test !== 'function') {
        let result = false;
    each(collection, function(value){
        if(value === true){
        result = true;
    }
    });
    return result;
        
    }
    
    let result = true;
    each(collection, function(e, i, a) {
        if(!test(e, i, a)) {
            result = false;
        }
    });
    return result;
}
module.exports.every = every;
/**
 * Some: Designed to iterate through a collection and call a function to each element in the collection.
 * elvaluates if function call evaluates a single value to be true
 * 
 * @param {Array or Object} collection : Collection to iterate over
 * @param {Function} test : function to apply to each value in the collection
 * 
*/
function some(collection, test) {
    let result = false;
    if (typeof test !== 'function') {
     each(collection, function(e){
        if(e === true){
        result = true;
    }
    });
    return result;
        
    }
    each(collection, function(e, i, a) {
        if(test(e, i, a)) {
            result = true;
        }
    });
    return result;
}
module.exports.some = some;


/**
 *  reduce: Designed to reduce an array of values to a single value.
 * 
 * @param {Array} array : The collection to iterate through
 * @param {Function} test: function called to each value in the 
 * collection to see if true.
 * @param {*} seed : initial value resulting from callback, further callback values will be added to seed
 * 
 * @return {*}: returns result of value fom the final function call.
 * 
*/ 

function reduce(array, test, seed){
  let seedless = arguments.length < 3;
  each(array, function(value, index, collection){
    if(seedless) {
    seedless = false;
      seed = value;
    } else seed = test(seed, value, index, collection);
  });
  return seed;
}
module.exports.reduce = reduce;

/**
 * extend:Designed take "n" amount of object inputs  and uses Object.assign method merge subsequent object's
 * properties into the initial object, 
 * 
 * 
 * @param {object} multiple objects :  objects to be merged by copying  key/value pairs into the first object
 * 
 * @return {object}: returns object in which all other object's key/value pairs are merged.
 * 
*/

function extend(obj1, obj2){
    let arg = Array.from(arguments);
    each(arg, function(e, i, a) {
        Object.assign(obj1, e);
}) ;
return obj1;
}
module.exports.extend = extend;