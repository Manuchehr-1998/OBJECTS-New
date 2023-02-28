function entry(obj, text) {
  let res = Object.entries(obj);
  let res1 = res.filter((key) => {
    key == text;
  });
  return res1;
}
console.log(entry({ pianno: 23, tu: 232, state: 600 }, "state"));
