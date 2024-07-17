function check_adult_age(age)
{
    return age >18;
}

const ages_arr=[12,35,89,11,10]
const result_filter=ages_arr.filter(check_adult_age);//returns value

const result_map=ages_arr.map(check_adult_age);//returns boolean value

console.log(result_map);
console.log(result_filter);

