D_EXTEND('zhp.pl',

    // Chorągiew
    Delegation_NS('kp', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Bazy (hosting chorągwi)
    Delegation_NS('folusz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('polko', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('funka', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('biala', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('ciche', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Hufce (hosting chorągwi)
    Delegation_NS('brodnica', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('bydgoszcz', '185.255.40.51'),
    Delegation_NS('golubdobrzyn', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('grudziadz', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('inowroclaw', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('koronowo', '185.255.40.51'),
    Delegation_NS('nml', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('paluki', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('swiecie', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_NS('wloclawek', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
    Delegation_A('tuchola', '185.255.40.51'),

    // MS365
    Ms365_Subdomain('bydgoszcz','zhp.pl'),
    Ms365_Subdomain('koronowo','zhp.pl'),
    Ms365_Subdomain('tuchola','zhp.pl'),

    // Hufiec Toruń (hosting hufca)
    Delegation_NS('torun', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Hufiec Powiatu Włocławskiego (hosting hufca)
    Delegation_NS('powiatwloclawek', ['ns3.biznes-host.pl.', 'ns4.biznes-host.pl.']),
    CNAME('wloclawekpowiat', 'powiatwloclawek.zhp.pl.'),

    // Hufiec Chojnice (hosting hufca)
    Delegation_NS('chojnice', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),

    // Imprezy Ogólnopolskie
    Delegation_NS('kopernikanski', ['ns1.atthost.pl.', 'ns2.atthost.pl.'])
);