
# ریجکس‌های پر کاربرد

در این ریپوزیتوری مجموعه‌ای از پرکاربردترین ریجکس‌های مصرفی در وب ایرانی لیست شده است

* **همکاری در آپدیت ریپوزیتوری**! لطفا برای همکاری ایشو مربوطه را مطالعه کنید

## لیست ریجکس‌ها

<details dir="rtl" style="">
    <summary>آدرس مکان</summary>
    <br>
    حروف فارسی و اعداد را قبول میکند شامل تمامی کاراتر‌های قابل استفاده در آدرس فارسی است
    <br>
    نمونه صحیح: خ تهرانی پ1, زنگ اول پلاک 2, خیابان آزادی – خیابان ملت – جنب تاکسیرانی – ساختمان سابق – شرکت شهرک صنعتی – طبقه سوم
    <br>
    <br>

```js
^[\u0600-\u06FF\s\d-–]+$
```
</details>

<details dir="rtl" style="">
    <summary>بررسی شماره کارت بانکی شتاب</summary>
    <br>
    شماره کارت بانکی شماره کارت بانکی ۱۶ رقم دارد و هیچ حرف انگلیسی یا فارسی در آن به کار نمی‌رود
    <br>
    نمونه صحیح: 6037251221121221, 5022291076442290, 2056789787874411, 9919102365459878
    <br>
    <br>

```js
[2569]{1}[\d]{15}
```
</details>

<details dir="rtl" style="">
    <summary>شماره پلاک خودرو</summary>
    <br>
    12 ب 345 ایران 67 یا به صورت کلی XX Y XXX ایران ZZ --- بررسی شماره پلاک ماشین‌ها
    <br>
    نمونه صحیح: 12 ب 345 ایران 67, 45 د 123 ایران 01, 07 م 789 ایران 88, 32 ی 321 ایران 45
    <br>
    <br>

```js
^\d{2}\s?[ب-ی]\s?\d{3}\s?ایران\s?\d{2}$
```
</details>

<details dir="rtl" style="">
    <summary>بررسی ایمیل</summary>
    <br>
    ایمیل صحیح قبول میکند
    <br>
    نمونه صحیح: majidh1@live.com, a@b.com
    <br>
    <br>

```js
^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
```
</details>

<details dir="rtl" style="">
    <summary>کد رنگ hex</summary>
    <br>
    فقط حروف انگلیسی و اعداد را قبول میکند و 3 یا 6 رقم است
    <br>
    نمونه صحیح: #222, #ccc, #FFFFFF, #Fa3Dc9
    <br>
    <br>

```js
^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
```
</details>

<details dir="rtl" style="">
    <summary>IP Address - آدرس آی‌پی</summary>
    <br>
    IP آدرس شناسه‌ای عددی است که برای شناسایی دستگاه‌ها در شبکه استفاده می‌شود و ساختارش در حالت IPv4 (چهار بخش عددی از 0 تا 255، مثل 192.168.1.1) است.
    <br>
    نمونه صحیح: 192.168.1.1, 255.255.255.255, 0.0.0.0, 10.20.30.40
    <br>
    <br>

```js
^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]).(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]).(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]).(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$
```
</details>

<details dir="rtl">
    <summary>شماره موبایل ایران</summary>
    <br>
    

<details dir="rtl" style="padding: 0 25px">
    <summary>شماره موبایل ایران - داخلی</summary>
    <br>
    شماره موبایل صحیح قبول میکند و با 09 شروع میشود
    <br>
    نمونه صحیح: 09012345678, 09121234567
    <br>
    <br>

```js
^09\d{9}$
```
</details>


<details dir="rtl" style="padding: 0 25px">
    <summary>شماره موبایل ایران - خارجی</summary>
    <br>
    شماره موبایل صحیح قبول میکند و با +989 شروع میشود
    <br>
    نمونه صحیح: +989012345678, +989121234567
    <br>
    <br>

```js
^\+989\d{9}$
```
</details>


<details dir="rtl" style="padding: 0 25px">
    <summary>شماره موبایل ایران - داخلی یا خارجی</summary>
    <br>
    شماره موبایل صحیح قبول میکند و یا با +98 شروع میشود یا با 0
    <br>
    نمونه صحیح: +989012345678, 09351234567
    <br>
    <br>

```js
^(\+98|0)?9\d{9}$
```
</details>

</details>
    
<details dir="rtl" style="">
    <summary>بررسی کد پستی</summary>
    <br>
    کدپستی شامل 10 رقم میباشد فقط اعداد قابل قبول است
    <br>
    نمونه صحیح: 6317836531, 5614793457, 3715659319
    <br>
    <br>

```js
\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b
```
</details>

<details dir="rtl" style="">
    <summary>بررسی تاریخ شمسی</summary>
    <br>
    تاریخ شمسی صحیح قبول میکند و بین اعداد / هست این regex سال‌های غیر مرسوم را پوشش نمیدهد
    <br>
    نمونه صحیح: 1371/10/08, 1471/12/29, 1271/01/01, 1571/05/11, 1329/08/25
    <br>
    <br>

```js
^1[2-5]\d{2}/((0[1-6]/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))/(30|([1-2][0-9])|(0[1-9]))))$
```
</details>

<details dir="rtl" style="">
    <summary>MAC Address - آدرس مک سیستم</summary>
    <br>
    این آدرس از 6 بخش شامل عدد و حرف (هگزادسیمال) تشکیل شده و با : این موارد از هم جدا شده است یا به هم چسبیده هستند
    <br>
    نمونه صحیح: AA:BB:CC:DD:EE:FF, 4A:1B:CC:D5:EE:F2, AABBCCDDEEFF, 4AB2C9D7EE1F
    <br>
    <br>

```js
^(?:[0-9A-f]{2}[:]?){6}(?<![:])$
```
</details>

<details dir="rtl" style="">
    <summary>بررسی کد ملی</summary>
    <br>
    کد ملی 10 رقمی و فقط عدد قبول میکند به دلیل داشتن الگوریتم در کد ملی با ریجکس به تهنایی نمی‌توان کد ملی را اعتبار سنجی کرد برای بررسی صحیح بودن کد ملی از <a href="https://github.com/majidh1/iranianNationalCode/blob/main/src/iranianNationalCodeValidator.js">این ریپو</a> میتوانید استفاده کنید
    <br>
    نمونه صحیح: 0011234554, 2569871231
    <br>
    <br>

```js
^[0-9]{10}$
```
</details>

<details dir="rtl" style="">
    <summary>فقط حروف فارسی</summary>
    <br>
    حروف فارسی قبول میکند شامل تمامی کاراتر‌های قابل استفاده در متون فارسی
    <br>
    نمونه صحیح: سلام, ضصثقفغعهخحجچچچچچچچچچچچپگکمنتالبیسشظطزرذدئوريالًٌٍـآۀَُِّءأإؤژية
    <br>
    <br>

```js
^[\u0600-\u06FF\s]+$
```
</details>

<details dir="rtl" style="">
    <summary>فقط اعداد فارسی</summary>
    <br>
    فقط اعداد فارسی قبول میکند
    <br>
    نمونه صحیح: ۰۱۲۳۴۵۶۷۸۹, ۹۵۹۱۲۰۰۰۰۶۳۳
    <br>
    <br>

```js
^[۰۱۲۳۴۵۶۷۸۹]+$
```
</details>

<details dir="rtl" style="">
    <summary>شماره ثابت</summary>
    <br>
    فقط اعداد ترکیب و پیش شماره
    <br>
    نمونه صحیح: 021-66332211, 039-55126541, 041-35674124, 068-66332211
    <br>
    <br>

```js
^0[0-9]{2,}-[0-9]{7,}$
```
</details>

<details dir="rtl" style="">
    <summary>بررسی شماره شبا IBAN</summary>
    <br>
    شماره شبا بانکی ایران با IR شروع میشود و 24 رقم عددی دارد و هیچ حرف انگلیسی یا فارسی دیگری در آن به کار نمی‌رود
    <br>
    نمونه صحیح: IR123456789012345678901234, IR987654321123564878955752
    <br>
    <br>

```js
IR[0-9]{24}
```
</details>

<details dir="rtl" style="">
    <summary>گذرواژه قوی</summary>
    <br>
    گذرواژه باید حداقل ۸ کاراکتر باشد و حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک کاراکتر ویژه  باشد
    <br>
    نمونه صحیح: Abcdef1!, StrongPass123!, P@ssW0rd2025, My_Pass-Word9
    <br>
    <br>

```js
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-\[\]{};':"\\|,.<>\/?]).{8,}$
```
</details>

<details dir="rtl" style="">
    <summary>آدرس سایت - URL</summary>
    <br>
    یک آدرس سایت معتبر قبول میکند
    <br>
    نمونه صحیح: https://stackoverflow.com/, http://stackoverflow.com, http://google.com/test, https://github.blog
    <br>
    <br>

```js
https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
```
</details>

