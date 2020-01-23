  export let createArrayOfFunctions = n => {
          if (n === undefined) return [];
          if (typeof n !== 'number') return null;
          let newArray = new Array(n);
          for (let index = 0; index < newArray.length; index++) {
              newArray[index] = function() {
                  return index;
              }

          }
          return newArray

      }
      //   console.log(createArrayOfFunctions(10)[3]());