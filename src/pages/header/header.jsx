// import React from "react";
import { createRoot } from "react-dom/client";
import "/src/tailwind.css";
import { headerData } from "/src/pages/header/header-data.js";

createRoot(document.getElementById("root")).render(
  <header className="shadow-Below/Low ">
    <h1 className="sr-only">마켓칼리</h1>
    <div className="mx-auto my-0 w-innerWrapper">
      <div className="header__div-top flex h-13 items-center justify-end"></div>
      <div className="mb-3.25 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/">
            <svg role="img" width="82" height="42" viewBox="0 0 82 42">
              <use href="/logo.svg#logo" />
              <title>마켓칼리 로고</title>
            </svg>
          </a>
          <a href="/" className="text-l-lg text-primary">
            마켓칼리
          </a>
          <div className="h-3.5 border-r text-gray-divider"></div>
          <a href="/" className="text-l-lg text-gray-400">
            뷰티칼리
          </a>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-100 rounded border border-primary px-5 py-3 text-p-lg text-gray-400 focus:outline-primary"
            placeholder="검색어를 입력해주세요"
          />
          <button type="button">
            <svg
              className="absolute right-5 top-3"
              role="img"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <use href="/icons/_sprite.svg#search" />
            </svg>
          </button>
        </div>
        <div className="relative flex gap-5">
          <button type="button">
            <svg role="img" width="36" height="36" viewBox="0 0 36 36">
              <use href="/icons/_sprite.svg#icons" />
            </svg>
          </button>
          <button type="button">
            <svg role="img" width="36" height="36" viewBox="56 0 36 36">
              <use href="/icons/_sprite.svg#icons" />
            </svg>
          </button>
          <a href="/src/pages/cart/" className="header__a-cart-origin relative">
            <svg role="img" width="36" height="36" viewBox="112 0 36 36">
              <use href="/icons/_sprite.svg#icons" />
            </svg>
          </a>
          <div className="header__bubble absolute right-0 top-12 z-10 hidden h-[100px] w-[254px] animate-bubble-fadeIn border border-gray-200 bg-white p-5">
            <figure className="flex gap-5">
              <img
                src=""
                alt=""
                className="header__bubble-img h-[60px] w-[46px]"
              />
              <div>
                <figcaption className="header__bubble-figcaption mb-2 text-l-sm text-gray-300"></figcaption>
                <p className="header__bubble-p text-p-sm text-content">
                  장바구니에 상품을 담았습니다.
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <nav className="flex h-18 items-center justify-between">
        <div className="group relative flex h-18 items-center gap-3">
          <svg role="img" width="16" height="14" viewBox="0 0 16 14">
            <use href="/icons/_sprite.svg#hamburger-black" />
          </svg>
          <span>카테고리</span>
          <div className="invisible absolute left-0 top-18 z-20 w-61.75 border-b border-l border-r border-gray-divider bg-white px-3 py-2 group-hover:visible">
            <ul className="flex flex-col gap-2">{categoryList()}</ul>
          </div>
        </div>
        <ul className="flex">
          <li className="px-13.5 py-2">
            <a href="/src/pages/productList/">신상품</a>
          </li>
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">베스트</a>
          </li>
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">알뜰쇼핑</a>
          </li>
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">특가/혜택</a>
          </li>
        </ul>
        <a className="rounded-3xl border border-gray-300 px-2 py-1" href="#">
          <span className="text-p-sm text-primary">샛별·낮</span>
          <span className="text-p-sm text-gray-500"> 배송안내</span>
        </a>
      </nav>
    </div>
    <div className="header__div-simple fixed left-0 right-0 top-0 z-20 hidden bg-white shadow-Below/Low">
      <nav className="mx-auto my-0 flex h-18 w-innerWrapper items-center justify-between gap-2">
        <div className="group relative flex h-18 items-center gap-3">
          <svg role="img" width="16" height="14" viewBox="0 0 16 14">
            <use href="/icons/_sprite.svg#hamburger-black" />
          </svg>
          <span>카테고리</span>
          <div className="invisible absolute left-0 top-18 z-10 w-61.75 border-b border-l border-r border-gray-divider bg-white px-3 py-2 group-hover:visible">
            <ul className="flex flex-col gap-2">{categoryList()}</ul>
          </div>
        </div>
        <ul className="flex">
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">신상품</a>
          </li>
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">베스트</a>
          </li>
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">알뜰쇼핑</a>
          </li>
          <li className="px-12 py-2">
            <a href="/src/pages/productList/">특가/혜택</a>
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            className="w-48.5 rounded border border-primary px-5 py-2 text-p-sm text-gray-400 focus:outline-primary"
            placeholder="검색어를 입력해주세요"
          />
          <button type="button">
            <svg
              className="absolute right-5 top-0"
              role="img"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <use href="/icons/_sprite.svg#search" />
            </svg>
          </button>
        </div>
        <div className="relative flex gap-5">
          <button type="button">
            <svg role="img" width="36" height="36" viewBox="0 0 36 36">
              <use href="/icons/_sprite.svg#icons" />
            </svg>
          </button>
          <button type="button">
            <svg role="img" width="36" height="36" viewBox="56 0 36 36">
              <use href="/icons/_sprite.svg#icons" />
            </svg>
          </button>
          <a href="/src/pages/cart/" className="header__a-cart-simple relative">
            <svg role="img" width="36" height="36" viewBox="112 0 36 36">
              <use href="/icons/_sprite.svg#icons" />
            </svg>
          </a>
          <div className="header__bubble absolute right-0 top-12 z-10 hidden h-[100px] w-[254px] animate-bubble-fadeIn border border-gray-200 bg-white p-5">
            <figure className="flex gap-5">
              <img
                src=""
                alt=""
                className="header__bubble-img h-[60px] w-[46px]"
              />
              <div>
                <figcaption className="header__bubble-figcaption mb-2 text-l-sm text-gray-300"></figcaption>
                <p className="header__bubble-p text-p-sm text-content">
                  장바구니에 상품을 담았습니다.
                </p>
              </div>
            </figure>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

function categoryList() {
  return headerData.map((data) => (
    <li key={data.span}>
      <a href="/src/pages/productList/" className="flex gap-2">
        <svg
          role="img"
          width={data.width}
          height={data.height}
          viewBox={data.viewBox}
        >
          <use href="/icons/_sprite.svg#menuIcon" />
        </svg>
        <span>{data.span}</span>
      </a>
    </li>
  ));
}

// 스크롤 높이에 따라 헤더 다르게 출력
{
  /*const headerSimple = document.querySelector(".header__div-simple");
console.log(headerSimple);
window.onscroll = function () {
  if (
    document.body.scrollTop > 195 ||
    document.documentElement.scrollTop > 195
  ) {
    // 스크롤이 origin 헤더의 높이만큼 내려갔을 때 simple 헤더 나타남
    headerSimple.style.display = "block";
  } else {
    // 다른 경우엔 origin 헤더 나타남
    headerSimple.style.display = "none";
  }
};
*/
}
