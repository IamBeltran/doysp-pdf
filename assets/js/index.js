console.log('works..');

const btn = document.getElementById('btn-print');
const pmu = document.getElementById('pmu');



btn.addEventListener('click', () => {
  console.log('hi');
  // console.log(pmu);
  function demoFromHTML() {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'in',
      format: 'letter',
      putOnlyUsedFonts:true,
      floatPrecision: 16 // or "smart", default is 16
    });
    doc.html(pmu, {
      callback: function (doc) {
        doc.save();
      },
      x: 10,
      y: 10
   });
  }
  demoFromHTML();
})
