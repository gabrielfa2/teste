import React from 'react';

const CollectionsSection = () => {
  const collections = [
    {
      title: 'ESPORTS',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      title: 'LIFESTYLE',
      image: 'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'ACCESSORIES',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-indigo-600 to-purple-500'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* 👇 MUDANÇA AQUI 👇 */}
        {/* Trocamos a cor do texto de 'text-gray-900' para 'text-white' */}
        <h2 className="text-3xl font-bold text-white mb-8">COLLECTIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`}></div>
                
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-colors duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold">{collection.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;