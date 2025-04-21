// ==UserScript==
// @name         SG Train Navigation Assistant
// @namespace    http://tampermonkey.net/
// @version      2025-04-21
// @description  Adds some QoL shortcuts for train navigation on SG!
// @author       Alpha2749 | SG /user/Alpha2749
// @match        https://www.steamgifts.com/giveaway/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamgifts.com
// @grant        none
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/533401/SG%20Train%20Navigation%20Assistant.user.js
// @updateURL https://update.greasyfork.org/scripts/533401/SG%20Train%20Navigation%20Assistant.meta.js
// ==/UserScript==


(function () {
    'use strict';

    const nextKeywords = ['next', 'forward', 'on', '>', 'cho', '→', '⏩', '👉', 'N E X T', 'ahead', 'future', 'climbing', '🌜', '↬' ];
    const lastKeywords = ['prev', 'back', 'last', '<', 'och', '←', '⏪', '👈', 'B A C K', 'retreat', 'past', 'falling', '🌛', '↫'];
    const nextRegex = new RegExp(nextKeywords.join('|'), 'i');
    const lastRegex = new RegExp(lastKeywords.join('|'), 'i');

    document.addEventListener('keydown', function (event) {

        const isInputField = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
        if (isInputField) {
            return;
        }

        const screenshotsOpen = !document.querySelector('.lightbox.hide');
        if (screenshotsOpen) {
            handleScreenshots(event);
            return;
        }

        if (event.key === 'ArrowRight') handleNavigation('next', nextRegex);
        if (event.key === 'ArrowLeft') handleNavigation('previous', lastRegex);
        if (event.key === 'ArrowUp') openScreenshots();
    });

    function handleNavigation(direction, regex) {
        const link = findLink(direction, regex) || extractLinks(direction);
        if (link) {
            showPopup(`Moving ${direction === 'next' ? 'Onward' : 'Backward'}!`);
            window.location.href = link;
        } else {
            showPopup(`Unable to find ${direction} cart. Are you sure you're in a train?`);
        }
    }

    function findLink(direction, regex) {
    return Array.from(document.querySelector('.page__description')?.querySelectorAll('a') || []).find(link => {
        const text = link.textContent.trim();
        const url = link.href;
        const isValidURL = url.includes('/giveaway/') && !url.includes('/discussion/') && !url.includes('/user/');

        return isValidURL && regex.test(text);
    })?.href;
}


    function extractLinks(direction) {
        const paragraphs = document.querySelector('.page__description')?.getElementsByTagName('p') || [];
        const numbers = Array.from(paragraphs)
            .flatMap(paragraph => [...paragraph.innerText.matchAll(/\d+/g)].map(match => parseInt(match[0])))
            .filter(Boolean);

        const uniqueNumbers = Array.from(new Set(numbers)).sort((a, b) => a - b);

        for (let i = 0; i < uniqueNumbers.length - 2; i++) {
            if (uniqueNumbers[i + 1] === uniqueNumbers[i] + 1 && uniqueNumbers[i + 2] === uniqueNumbers[i] + 2) {
                const targetNum = direction === 'previous' ? uniqueNumbers[i] : uniqueNumbers[i + 2];
                const link = Array.from(document.querySelector('.page__description')?.querySelectorAll('a') || []).find(
                    a => a.textContent.trim() === targetNum.toString()
                );
                if (link) return link.href;
            }
        }
        return null;
    }

    function handleScreenshots(event) {
        if (event.key === 'ArrowUp') {
            const closeBtn = document.querySelector('.lightbox-header-icon--close');
            closeBtn?.click();
        }
    }

    function openScreenshots() {
        const screenshotBtn = Array.from(document.querySelectorAll('a[data-ui-tooltip]')).find(el => {
            const tooltipData = el.getAttribute('data-ui-tooltip');
            return tooltipData && JSON.parse(tooltipData).rows.some(row =>
                row.columns.some(column => column.name === 'Screenshots / Videos')
            );
        });
        screenshotBtn?.click();
    }

    function showPopup(message) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            border-radius: 5px;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.2s, transform 0.3s;
        `;
        popup.textContent = message;
        document.body.appendChild(popup);

        requestAnimationFrame(() => {
            popup.style.opacity = '1';
            popup.style.transform = 'translateY(0)';
        });
    }
})();
