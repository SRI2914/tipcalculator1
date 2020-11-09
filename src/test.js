async function exec(arg) {
  handle.reset(arg);
  return new Promise((res) => {
    window.setImmediate(res(handle.value()));
  });
}
async function test(input, output, message = "test case") {
  return exec({ bill: input.bill, tip: input.tip, people: input.people })
    .then(
      (value) =>
        parseInt(value.tip) === output.tip &&
        parseInt(value.amount) === output.amount
    )
    .then((success) => {
      if (success) console.log(`success: ${message} `);
      else console.error(`failed: ${message} `);
    });
}
async function runtests() {
  await test({ bill: 1000, tip: 11, people: 23 }, { tip: 4, amount: 48 });
  await test({ bill: 1000, tip: 11, people: 23 }, { tip: 4, amount: 48 });
  await test({ bill: 1000, tip: 11, people: 23 }, { tip: 4, amount: 47 });
  await test({ bill: 1000, tip: 11, people: 23 }, { tip: 4, amount: 48 });
}
