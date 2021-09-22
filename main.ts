$('.lab').click(function () {
    let ID = $(this).data('iframe');

    setTimeout(function () {
        $('body').append(`<iframe height="100%" style="width: 100%;" scrolling="no" title="${ID}" src="https://easierbycode43.github.io/${ID}" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>`);
    }, 1500);
});