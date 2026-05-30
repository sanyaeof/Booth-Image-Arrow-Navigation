// ==UserScript==
// @name         Booth Image Arrow Navigation
// @name:ja      Boothの商品画像を←→キーで切り替え
// @version      1.0
// @description  BOOTHの商品画像を←→キーで切り替えができるようになります。
// @namespace    https://twitter.com/sanya_vrc_
// @author       サーニャ
// @match        https://booth.pm/*
// @match        https://*.booth.pm/*
// @icon         https://cdn-1.webcatalog.io/catalog/booth-pm/booth-pm-icon-filled-256.png
// @downloadURL  https://github.com/sanyaeof/Booth-Image-Arrow-Navigation/raw//main/Booth%20Image%20Arrow%20Navigation.user.js
// @updateURL    https://github.com/sanyaeof/Booth-Image-Arrow-Navigation/raw//main/Booth%20Image%20Arrow%20Navigation.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', (event) => {

        // 入力中は無効
        const active = document.activeElement;
        if (
            active &&
            (active.tagName === 'INPUT' ||
             active.tagName === 'TEXTAREA' ||
             active.isContentEditable)
        ) {
            return;
        }

        if (event.key === 'Escape') {

            // 拡大表示を閉じる
            const closeBtn = document.querySelector(
                'button.close-modal'
            );

            if (closeBtn) {
                event.preventDefault();
                closeBtn.click();
                return;
            }
        }

        if (event.key === 'ArrowLeft') {

            // 拡大表示モード優先
            const zoomPrev =
                document.querySelector(
                    'button:has(pixiv-icon[name="24/Prev"])'
                );

            if (zoomPrev) {
                zoomPrev.click();
                return;
            }

            // 通常表示
            const prevBtn =
                document.querySelector('.slick-prev.slick-arrow');

            if (prevBtn) {
                prevBtn.click();
            }
        }

        if (event.key === 'ArrowRight') {

            // 拡大表示モード優先
            const zoomNext =
                document.querySelector(
                    'button:has(pixiv-icon[name="24/Next"])'
                );

            if (zoomNext) {
                zoomNext.click();
                return;
            }

            // 通常表示
            const nextBtn =
                document.querySelector('.slick-next.slick-arrow');

            if (nextBtn) {
                nextBtn.click();
            }
        }

    });
})();