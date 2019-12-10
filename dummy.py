import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")
for token in doc:
    print(token.text, token.pos_, token.dep_)

Apple PROPN nsubj
is AUX aux
looking VERB ROOT
at ADP prep
buying VERB pcomp
U.K. PROPN compound
startup NOUN dobj
for ADP prep
$ SYM quantmod
1 NUM compound
billion NUM pobj















TEXT	    LEMMA	POS	    TAG	    DEP	    SHAPE	ALPHA	STOP
Apple	    apple	PROPN	NNP	    nsubj	Xxxxx	True	False
is	        be	    VERB	VBZ	    aux	    xx	    True	True
looking	    look	VERB	VBG	    ROOT	xxxx	True	False
at	        at  	ADP	    IN	    prep	xx	    True	True
buying	    buy	    VERB	VBG	    pcomp	xxxx	True	False
U.K.	    u.k.	PROPN	NNP	    compoundX.X.	False	False
startup	    startup	NOUN	NN	    dobj	xxxx	True	False
for	        for	    ADP	    IN	    prep	xxx	    True	True
$	        $	    SYM	    $	    quantmod $	    False	False
1	        1	    NUM	    CD	    compound d	    False	False
billion	    billion	NUM	    CD	    pobj	xxxx	True	False



import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

for token in doc:
    print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
            token.shape_, token.is_alpha, token.is_stop)