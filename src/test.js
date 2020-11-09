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
  await test({ bill: 1100, tip: 11, people: 23 }, { tip: 5, amount:  53});
  await test({ bill: 1200, tip: 11, people: 23 }, { tip: 5, amount: 57 });
  await test({ bill: 1300, tip: 11, people: 23 }, { tip: 6, amount: 62 });
  await test({ bill: 1400, tip: 11, people: 23 }, { tip: 6, amount: 67 });
  
  await test({ bill: 1500, tip: 11, people: 23 }, { tip: 7, amount: 72 });
  await test({ bill: 1600, tip: 11, people: 23 }, { tip: 7, amount: 77 });
  await test({ bill: 1700, tip: 11, people: 23 }, { tip: 8, amount: 82 });
  await test({ bill: 1800, tip: 11, people: 23 }, { tip: 8, amount: 86 });
  
  await test({ bill: 1900, tip: 11, people: 23 }, { tip: 9, amount: 91 });
  await test({ bill: 2000, tip: 11, people: 23 }, { tip: 9, amount: 96 });
  await test({ bill: 2100, tip: 11, people: 23 }, { tip: 10, amount: 101 });
  await test({ bill: 2200, tip: 11, people: 23 }, { tip: 10, amount: 106 });
  
  await test({ bill: 2300, tip: 11, people: 23 }, { tip: 11, amount: 111 });
  await test({ bill: 2400, tip: 11, people: 23 }, { tip: 11, amount: 115 });
  await test({ bill: 2500, tip: 11, people: 23 }, { tip: 11, amount: 120 });
  await test({ bill: 2600, tip: 11, people: 23 }, { tip: 12, amount: 125 });
  
  await test({ bill: 2700, tip: 11, people: 23 }, { tip: 12, amount: 130 });
  await test({ bill: 2800, tip: 11, people: 23 }, { tip: 13, amount: 135 });
  await test({ bill: 2900, tip: 11, people: 23 }, { tip: 13, amount: 139 });
  await test({ bill: 3000, tip: 11, people: 23 }, { tip: 14, amount: 144 });
  
  await test({ bill: 3100, tip: 11, people: 23 }, { tip: 14, amount: 149 });
  await test({ bill: 3200, tip: 11, people: 23 }, { tip: 15, amount: 154 });
  await test({ bill: 3300, tip: 11, people: 23 }, { tip: 15, amount: 159 });
  await test({ bill: 3400, tip: 11, people: 23 }, { tip: 16, amount: 164 });
  
  
}
