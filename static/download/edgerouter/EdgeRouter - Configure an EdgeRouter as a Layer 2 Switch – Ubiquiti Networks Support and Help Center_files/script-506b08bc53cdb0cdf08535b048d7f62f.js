/*
 * jQuery v1.9.1 included
 */
//redirect old articles to newer
 var oldIds = ["204909454", "204949744", "205146050", "205146070"];
 var newIds = ["217875218", "204910064", "221321728", "204950294"];

  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf(oldIds[i]) > -1) {
      window.location.href = 'https://help.ubnt.com/hc/en-us/articles/' + newIds[i]; 
    }
  }
//end of article redirect


$(document).ready(function () {

  
    // Capture submit request event
  $('a.submit-a-request, .article-more-questions a').on('click', function(e) {
      var $this = $(this),
          path = window.location.pathname;
      ga('send', 'event', 'Submit Request', 'Submit Request From', path);
  });
    $("#new_request").on('click', '.searchbox-suggestions a', function(e) {
      var $this = $(this),
          link = $this.attr('href');
      ga('send', 'event', 'Ticket Deflection', 'Deflect', link);
  });
    $('.share a').on('click', function(e) {
      var $this = $(this),
          type = $this.attr('class').replace('share-',''),
          path = window.location.pathname;
      ga('send', 'event', 'Social Share', 'Share', path);
  });
  
    $('form[role="search"]').on('submit', function(e) {
      var $this = $(this),
          query = $this.find('input[type="search"]').val().toLowerCase();
      ga('send', 'event', 'Search', 'Submit', query);
  });
  
    // social share popups
    $(".share a").click(function (e) {
        e.preventDefault();
        window.open(this.href, "", "height = 500, width = 500");
    });

    // toggle the share dropdown in communities
    $(".share-label").on("click", function (e) {
        e.stopPropagation();
        var isSelected = this.getAttribute("aria-selected") == "true";
        this.setAttribute("aria-selected", !isSelected);
        $(".share-label").not(this).attr("aria-selected", "false");
    });

    $(document).on("click", function () {
        $(".share-label").attr("aria-selected", "false");
    });

    // show form controls when the textarea receives focus or backbutton is used and value exists
    var $answerbodyTextarea = $(".answer-body textarea"),
        $answerFormControls = $(".answer-form-controls"),
        $commentContainerTextarea = $(".comment-container textarea"),
        $commentContainerFormControls = $(".comment-form-controls");

    $answerbodyTextarea.one("focus", function () {
        $answerFormControls.show();
    });

    $commentContainerTextarea.one("focus", function () {
        $commentContainerFormControls.show();
    });

    if ($commentContainerTextarea.val() !== "") {
        $commentContainerFormControls.show();
    }

    if ($answerbodyTextarea.val() !== "") {
        $answerFormControls.show();
    }

    var $ubqHomeElem = $('#home__page'),
        $ubqBody = $('body'),
        $ubqCatPage = $('#category__page'),
        $ubntArtPage = $('#article__page'),
        bodyHeight = $("body").height(),
        vwptHeight = $(window).height(),
        ubntArtCategories = [200319710, 200323764, 200321064, 200320654, 200321660, 200323774, 200320774, 201589638],
        ubntCategoriesId = [200323764, 200319710, 200321064, 200320654, 200321660, 200320774, 200323774, 201589638];

    var findCategory = function findCategory(val, arr) {
        if ($.inArray(val, arr) !== -1) {
            return true;
        }

        return false;
    };

    var ubntGetArticles = function ubntGetArticles(id) {
        var dfd = new jQuery.Deferred();

        $.get("/api/v2/help_center/sections/" + id + "/articles.json?sort_by=position").done(function (data) {
            var articles = data.articles;
            dfd.resolve(articles);
        });

        return dfd.promise();
    };

    var ubntGetSections = function ubntGetSections(id) {
        var dfd = new jQuery.Deferred();

        $.get("/api/v2/help_center/categories/" + id + "/sections.json?sort_by=position").done(function (data) {
            var sections = data.sections;
            dfd.resolve(sections);
        });

        return dfd.promise();
    };

    var ubntGetCategories = function ubntGetCategories() {
        var dfd = new jQuery.Deferred();

        $.get("/api/v2/help_center/categories.json?sort_by=position").done(function (data) {
            var categories = data.categories;
            dfd.resolve(categories);
        });

        return dfd.promise();
    };

    var ubntShowCatButton = function ubntShowCatButton(catId) {
        $ubqBody.find('.js-btn-comm').addClass('hide');
        $ubqBody.find('#btn-cat-' + catId).removeClass('hide');
    };

    var ubntShowCatInfo = function ubntShowCatInfo(catId) {
        $ubqBody.find('.js-lastest-software').addClass('hide');
        $ubqBody.find('#ls-' + catId).removeClass('hide');

        $ubqBody.find('.js-printed-mat').addClass('hide');
        $ubqBody.find('#pm-' + catId).removeClass('hide');

        $ubqBody.find('.js-ubnt-comm').addClass('hide');
        $ubqBody.find('#comm-' + catId).removeClass('hide');
    };

    var isHomepagePage = function isHomepagePage() {
        $ubqBody.addClass('homepage');
    };

    var isCategoryPage = function isCategoryPage() {
        var ubntCatId = parseInt(window.location.pathname.split("/categories/")[1].slice(0, 9)),
            isFeaturedCat = findCategory(ubntCatId, ubntCategoriesId);

        if (isFeaturedCat) {
            ubntShowCatInfo(ubntCatId);
        }

        $('#category__page').find('.category__header').attr('id', 'hc-cat-' + ubntCatId);
    };

    var isArticlePage = function isArticlePage() {
        var curentSecId = parseInt($("ol.breadcrumbs li").eq(2).find("a").attr("href").split("/sections/")[1]),
            curentCatId = parseInt($("ol.breadcrumbs li").eq(1).find("a").attr("href").split("/categories/")[1]),
            isMainCategory = findCategory(curentCatId, ubntArtCategories);

        if (isMainCategory) {
            ubntShowCatButton(curentCatId);
        }

        //ubntShowInnerArticles(curentSecId);
    };

    var ubntAllArticlesAction = function ubntAllArticlesAction(action) {
        var $kbList = $('#kb__list'),
            $catTree = $('#category__tree'),
            $topContent = $('.home__top-page'),
            $catMenu = $('#cat-menu');

        if (action == 'show') {
            $kbList.hide();
            $topContent.hide();
            $catTree.show();
            $(".footer").removeClass('sticky__footer');
        } else {
            $catTree.hide();
            $topContent.show();
            $kbList.show();
            $catMenu.html('');
        }
    };

    var ubntShowArtMenu = function ubntShowArtMenu(e) {
        e.preventDefault();

        var $this = $(this),
            $container = $('#slide__box'),
            sectionId = parseInt($this.data('sec-id')),
            $menu = $('#article-menu'),
            showArticles = function showArticles(id) {
                ubntGetArticles(id).then(function (articles) {
                    var htmlList = '',
                        lastEl = $('<li><a href="#" data-menu="#article-menu" data-step="2" class="js-go-back go-back">Go Back</a></li>')

                    if (articles.length) {
                        articles.forEach(function (art) {
                            var articleName = art.name,
                                articleUrl = art.html_url;
                            htmlList += '<li><a class="js-art-item" href="' + articleUrl + '">' + articleName + '</a></li>';
                        });

                        $menu.append(htmlList);
                        $menu.append(lastEl);
                        $container.css({
                            marginLeft: "-450px"
                        });
                        //$("html, body").stop().animate({scrollTop: $menu.offset().top}, 500);

                    } else {
                        return;
                    }

                });
            };

        showArticles(sectionId);
    };

    var ubntShowSecMenu = function ubntShowSecMenu(e) {
        e.preventDefault();

        var $this = $(this),
            $container = $('#slide__box'),
            id = parseInt($this.data('cat-id')),
            $menu = $('#sec-menu'),
            showSections = function showSections(id) {
                ubntGetSections(id).then(function (sections) {
                    var htmlList = '',
                        lastEl = $('<li><a href="#" data-menu="#sec-menu" data-step="1" class="js-go-back go-back">Go Back</a></li>')

                    if (sections.length) {
                        sections.forEach(function (sec) {
                            var secName = sec.name,
                                secId = sec.id;
                            htmlList += '<li><a class="js-section-item" data-sec-id="'+ secId +'" href="#">' + secName + '</a></li>';
                        });

                        $menu.append(htmlList);
                        $menu.append(lastEl);
                        $container.css({
                            marginLeft: "-225px"
                        });
                        //$("html, body").stop().animate({scrollTop: $menu.offset().top}, 500);

                    } else {
                        return;
                    }

                });
            };

        showSections(id);
    };

    var ubntShowCatMenu = function ubntShowCatMenu() {
        var $this = $(this),
            $container = $('#slide__box'),
            $menu = $('#cat-menu'),
            showCategories = function showCategories() {
                ubntGetCategories().then(function (categories) {
                    var htmlList = '';

                    if (categories.length) {
                        categories.forEach(function (cat) {
                            var catName = cat.name,
                                catId = cat.id;
                            htmlList += '<li><a class="js-cat-item" data-cat-id="' + catId + '" href="#">' + catName + '</a></li>';
                        });

                        $menu.append(htmlList);
                        //$("html, body").stop().animate({scrollTop: $menu.offset().top}, 500);
                    } else {
                        return;
                    }

                });
            };

        showCategories();
    };

    var ubntGoBack = function ubntGoBack(e) {
        e.preventDefault();
        var $container = $('#slide__box'),
            $this = $(this),
            $menu = $this.data('menu'),
            step = $this.data('step');

        if (step == 2) {
            $container.css({
                marginLeft: "-225px"
            });
        } else {
            $container.css({
                marginLeft: "0"
            });
        }

        $($menu).html('');
    };

    var ubntShowInnerArticles = function ubntShowInnerArticles(id) {
        ubntGetArticles(id).then(function (articles) {
            var htmlList = '',
                lastEl = $('<li><a class="go-back" href="/hc/en-us#all-articles">Go Back</a></li>'),
                $menu = $('#art-inner');

            if (articles.length) {
                articles.forEach(function (art) {
                    var articleName = art.name,
                        articleUrl = art.html_url;
                    htmlList += '<li><a class="js-art-item" href="' + articleUrl + '">' + articleName + '</a></li>';
                });

                $menu.append(htmlList);
                $menu.append(lastEl);
            } else {
                return;
            }
        });
    };

    $(document)
        .on('click', '.js-toggle-mobile', function (e) {
            e.preventDefault();
            var $this = $(this);

            if ($('body').hasClass('js-search-opened')) {
                $('body').removeClass('js-search-opened');
                $('body').find('.js-search-opened').removeClass('js-search-opened');
            }

            if ($this.hasClass('js-menu-opened')) {
                $this.removeClass('js-menu-opened');
                $('body').removeClass('js-menu-opened');
            } else {
                $this.addClass('js-menu-opened');
                $('body').addClass('js-menu-opened');
            }
        })
        .on('click', '.js-search-toggle', function (e) {
            e.preventDefault();
            var $this = $(this);

            if ($('body').hasClass('js-menu-opened')) {
                $('body').removeClass('js-menu-opened');
                $('body').find('.js-menu-opened').removeClass('js-menu-opened');
            }

            if ($this.hasClass('js-search-opened')) {
                $this.removeClass('js-search-opened');
                $('body').removeClass('js-search-opened');
            } else {
                $this.addClass('js-search-opened');
                $('body').addClass('js-search-opened');
            }
        })
        .on('click', '.js-section-item', ubntShowArtMenu)
        .on('click', '.js-cat-item', ubntShowSecMenu)
        .on('click', '.js-go-back', ubntGoBack);

    if ($ubqHomeElem.length) {
        isHomepagePage();
    }

    if ($ubqCatPage.length) {
        isCategoryPage();
    }

    if ($ubntArtPage.length) {
        isArticlePage();
    }

    if (vwptHeight > bodyHeight) {
        $(".footer").addClass('sticky__footer');
    }

    $(window).on('hashchange', function (e) {
        if (location.hash === '#all-articles') {
            ubntAllArticlesAction('show');

            if ($('#slide__box').length) {
                ubntShowCatMenu();
                $('.footer').removeClass('.sticky__footer');
            }
        }
        else {
            ubntAllArticlesAction('hide');
        }

    });
    $(window).trigger('hashchange');
});

$("#table-of-contents-conatiner").headerlinks();

