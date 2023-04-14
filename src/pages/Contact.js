
import home from "../images/home.svg"
import tel from "../images/tel.svg"
import mail2 from "../images/mail2.svg"

function Contact() {
    return (
        <div className="m-2 md:m-12 lg:m-12 md:p-8 lg:p-8 p-2 bg-slate-100 rounded-lg">
            <div className="mb-16">
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3120.840550678843!2d29.005293493391264!3d41.02125527680939!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1680804774377!5m2!1str!2str"></iframe>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pr-4 md:pr-4">
                    <h1 className="mb-4 text-3xl">İletişim Formu</h1>
                    <form>
                        <div className="mb-4">
                            <input placeholder="Adınız" type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <input placeholder="Soyadınız" type="text" id="surname" name="surname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <input placeholder="Telefon numaranız" type="text" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <input placeholder="mail adresiniz" type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Mesajınız" id="message" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-cyan-500 text-white py-2 px-4 rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50">Gönder</button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 pl-4 md:pl-4 ml-0 md:ml-16 mt-8 md:mt-0">
                    <h1 className="mb-10 text-3xl">Adres Bilgileri</h1>
                    <div className="flex items-center mb-4">
                        <img className="w-6 mr-2" src={home} alt="ev icon" />
                        <span className="text-gray-700">Salacak, 34668 Üsküdar/İstanbul</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <img className="w-6 mr-2" src={tel} alt="telefon icon" />
                        <span className="text-gray-700">+90 555 55 55</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <img className="w-6 mr-2" src={mail2} alt="mail icon" />
                        <span className="text-gray-700">deneme@deneme.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
