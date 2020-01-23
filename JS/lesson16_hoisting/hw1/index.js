  export let createArrayOfFunctions = n => {
          if (typeof n !== 'number') return null;
          if (n === 'undefined') return newArray;
          let newArray = [];
          for (let index = 0; index < n; index++) {
              newArray[index] = function() {
                  return index;
              }

          }
          return newArray

      }
      //   console.log(createArrayOfFunctions(10)[3]());