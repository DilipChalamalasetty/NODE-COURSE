# -*- coding: utf-8 -*-
"""
Created on Fri Nov 15 10:35:58 2019

@author: KMTRAINEE105
"""

import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")
for token in doc:
    print(token.text, token.pos_, token.dep_)