function TfetchItems1(): string[] {
  const items = ['a', 'b', 'c'];
  return items;
}
const result1 = TfetchItems1();
console.log(result1);

function TfetchItems2(): Promise<string[]> {
  const items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
const result2 = TfetchItems2();
console.log(result2);
