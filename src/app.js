const input = wijmo.input;
class handler {
  widget;
  set tipperperson(value) {
    return (this.widget.querySelector("#tip-amount").value = value);
  }
  get tipperperson() {
    return parseInt(this.widget.querySelector("#tip-amount").value);
  }
  set billperperson(value) {
    return (this.widget.querySelector("#total-bill").value = value);
  }
  get billperperson() {
    return parseInt(this.widget.querySelector("#total-bill").value);
  }
  billAmount;
  tipPercentage;
  nosPerson;
  constructor(target = "container") {
    this.widget = document.querySelector(target);
    this.billAmount = new input.InputNumber(`${target} #bill-amount`, {
      valueChanged: () => this.refresh(),
    });
    this.tipPercentage = new input.InputNumber(`${target} #tip-percentage`, {
      valueChanged: () => this.refresh(),
    });
    this.nosPerson = new input.InputNumber(`${target} #number-person`, {
      valueChanged: () => this.refresh(),
    });
    this.reset();
  }
  refresh() {
    try {
      var tip = (this.tipperperson =
        ((this.billAmount.value / this.nosPerson.value) *
          this.tipPercentage.value) /
        100);
      this.billperperson = this.billAmount.value / this.nosPerson.value + tip;
    } catch (e) {
      this.reset();
    }
  }
  reset({ bill = 100, tip = 10, people = 1 } = {}) {
    this.billAmount.value = bill;
    this.tipPercentage.value = tip;
    this.nosPerson.value = people;
  }
  value() {
    return { tip: this.tipperperson, amount: this.billperperson };
  }
}
