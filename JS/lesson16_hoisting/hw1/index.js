  let createArrayOfFunctions = n => {
          if (typeof n !== 'number') return null;
          if (typeof n == 'undefined') return [];
          let newArray = new Array(n);
          for (let index = 0; index < newArray.length; index++) {
              newArray[index] = function() {
                  return index;
              }

          }
          return newArray

      }
      //   console.log(createArrayOfFunctions(10)[3]());