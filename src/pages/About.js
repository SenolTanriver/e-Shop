    import React from 'react';

    const About = () => {
        return (
            <div className="m-2 md:m-12 lg:m-12 p-4 bg-slate-100 rounded-lg">
                
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 mr-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Biz Kimiz?</h2>
                            <p className="text-gray-700 text-lg mb-4">ABC Giyim, 2005 yılında kaliteli ve uygun fiyatlı giyim ürünleri sunan bir e-ticaret sitesi olarak kuruldu. Müşterilerine en son moda trendlerini takip eden, sürdürülebilir ve etik üretim süreçlerini kullanan, şık ve dayanıklı giyim ürünleri sunmaktadır. Misyonumuz, müşterilerimize moda ve kaliteyi bir arada sunarken, sürdürülebilir ve etik üretim süreçlerini kullanarak, çevreyi ve toplumu korumaktır. </p>
                            <p className="text-gray-700 text-lg">Vizyonumuz, müşterilerimize kaliteli ve sürdürülebilir giyim ürünleri sunarak, dünya genelinde bilinir bir marka olmaktır. Bu vizyonu gerçekleştirmek için, her zaman müşterilerimizin ihtiyaçlarına odaklanarak, ürünlerimizi sürekli olarak iyileştirmek ve genişletmek için çalışırız.</p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                        <img src="https://cdn.bixcod.com/disket/6135f98c52d31TK6135f98c52d33.jpg" alt="Biz Kimiz" class="rounded-lg w-full h-auto"/>
                        </div>
                    </div>
                
            </div>
        )
    }

    export default About;
