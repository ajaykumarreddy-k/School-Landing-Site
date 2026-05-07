export default function Fees() {
  const feesData = [
    { grade: 'Class 1', fee: '₹25,000', term: 'per annum' },
    { grade: 'Class 2', fee: '₹25,000', term: 'per annum' },
    { grade: 'Class 3', fee: '₹25,000', term: 'per annum' },
    { grade: 'Class 4', fee: '₹25,000', term: 'per annum' },
    { grade: 'Class 5', fee: '₹25,000', term: 'per annum' },
    { grade: 'Class 6', fee: '₹30,000', term: 'per annum' },
    { grade: 'Class 7', fee: '₹30,000', term: 'per annum' },
    { grade: 'Class 8', fee: '₹30,000', term: 'per annum' },
    { grade: 'Class 9', fee: '₹35,000', term: 'per annum' },
    { grade: 'Class 10', fee: '₹35,000', term: 'per annum' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter text-ink mb-6">
          Fee Structure
        </h2>
        <p className="text-gray-500 mb-12 font-medium max-w-xl mx-auto">
          Transparent and accessible education pricing. Our priority is delivering premium value without hidden costs.
        </p>

        <div className="bg-stone rounded-[2.5rem] p-4 lg:p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feesData.map((row, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between bg-white px-6 py-5 rounded-2xl border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center font-display font-bold text-pine">
                    {row.grade.replace('Class ', '')}
                  </div>
                  <span className="font-semibold text-lg text-ink">{row.grade}</span>
                </div>
                <div className="text-right flex items-baseline gap-1">
                  <span className="font-display font-bold text-2xl text-pine">{row.fee}</span>
                  <span className="text-gray-400 text-sm font-medium">{row.term}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
