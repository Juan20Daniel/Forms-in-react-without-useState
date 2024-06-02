//Una simple expreción regular
const expretions = {
    firstname:/^[a-zA-Z]{1,30}$/,
    lastname:/^[a-zA-Z]{1,30}$/,
    ago:/^[0-9]{1,30}$/
  }
export const validateData = (form) => {
    const formData = new FormData(form);
    let arrayCamps = [];
    let validatedFields = [];
    for(let [name, value] of formData) {
      arrayCamps.push({[name]:value});
    }
    arrayCamps.forEach(item => {
      const key = Object.keys(item);
      validatedFields.push({...item, valid:expretions[key].test(item[key])});
    });
    validatedFields.forEach(item => {
      const key = Object.keys(item)[0];
      if(item.valid) form[key].classList.remove("error");
      if(!item.valid) form[key].classList.add("error");
    });
    const incorrects = validatedFields.some(item => !item.valid);
    if(!incorrects) {
        validatedFields.forEach(item => {
            const key = Object.keys(item)[0];
            form[key].value = '';
        });
    }
    return !incorrects ? validatedFields : false;
  }