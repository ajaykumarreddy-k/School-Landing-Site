export default function Fees() {
  const feesData = [
    { grade: 'L.K.G', fee: '₹8,000', term: 'per annum' },
    { grade: 'U.K.G', fee: '₹8,500', term: 'per annum' },
    { grade: '1st Class', fee: '₹9,000', term: 'per annum' },
    { grade: '2nd Class', fee: '₹9,500', term: 'per annum' },
    { grade: '3rd Class', fee: '₹10,000', term: 'per annum' },
    { grade: '4th Class', fee: '₹10,500', term: 'per annum' },
    { grade: '5th Class', fee: '₹11,000', term: 'per annum' },
    { grade: '6th Class', fee: '₹12,000', term: 'per annum' },
    { grade: '7th Class', fee: '₹12,500', term: 'per annum' },
    { grade: '8th Class', fee: '₹13,000', term: 'per annum' },
    { grade: '9th Class', fee: '₹14,000', term: 'per annum' },
    { grade: '10th Class', fee: '₹20,000', term: 'per annum' },
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
                    {row.grade.match(/\d+/) ? row.grade.match(/\d+/)![0] : row.grade.replace(/\./g, '')}
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
