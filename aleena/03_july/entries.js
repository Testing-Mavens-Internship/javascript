const obj ={a:1,b:2,c:3};

  const swap = Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
  console.log(swap)
  console.log(typeof(swap))


