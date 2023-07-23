
# ریجکس‌های پر کاربرد

در این ریپوزیتوری مجموعه‌ای از پرکاربردترین ریجکس‌های مصرفی در وب ایرانی لیست شده است

* **همکاری در آپدیت ریپوزیتوری**! لطفا برای همکاری ایشو مربوطه را مطالعه کنید

## لیست ریجکس‌ها

<details dir="rtl">
    <summary>شماره موبایل ایران</summary>
    <br>
    

<details dir="rtl">
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


<details dir="rtl">
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


<details dir="rtl">
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
    
<details dir="rtl">
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

<details dir="rtl">
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

<details dir="rtl">
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

<details dir="rtl">
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

