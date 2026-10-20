# Academy for Movement and Development — ვებსაიტი (React + Vite)

## გაშვება
```
npm install
npm run dev      # გახსენით http://localhost:5173
npm run build    # გამოსაქვეყნებელი dist საქაღალდე
```
საჭიროა Node.js 18 ან უფრო ახალი (`node -v`).

## სად რა იცვლება
| რა | სად |
|---|---|
| ტექსტები, მომსახურებები, სპეციალისტები, სიახლეები, კონტაქტი | `src/data.js` |
| გალერეის ფოტოები (ავტომატურად) | `src/assets/gallery/` |
| სპეციალისტების ფოტოები | `src/assets/specialists/` |
| ლოგო | `src/brand/logo.webp` (ბრაუზერის ხატულა: `public/favicon.png`) |
| ფერები და დიზაინი | `src/index.css` (ფერები ფაილის ბოლოს, `:root`) |
| გვერდები | `src/pages/` |
| ხელახლა გამოყენებადი ნაწილები (მენიუ, ბარათი, FAQ) | `src/components/` |
| გვერდების მისამართები | `src/App.jsx` |

## როგორ მუშაობს
`src/main.jsx` ტვირთავს `App`-ს, `App.jsx` ირჩევს რომელი გვერდი ვაჩვენოთ მისამართის მიხედვით (`/services`, `/services/physio`...), `Layout` ყველა გვერდზე აჩვენებს მენიუს და ფუტერს.

## ფოტოების შემცირება (სწრაფი საიტისთვის)
დიდი ფოტოები შეანელებს საიტს. ახალი ფოტოები ჩააგდეთ `src/assets/gallery`-ში და გაუშვით:
```
npm i -D sharp
npm run photos
```
ფოტოები გახდება მსუბუქი WebP, ორიგინალები კი შეინახება `photos-original`-ში.
