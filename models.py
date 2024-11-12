# -*- coding: utf-8 -*-
"""
Created on Tue Nov 12 15:59:34 2024

@author: mmahi
"""
from datasets import load_dataset
from transformers import DistilBertTokenizer

# Loading the datasets
dataset = load_dataset('imdb')
print(dataset['train'][0])

# Preprocessing the data
tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
def token_function(data):
    return tokenizer(data['text'], padding='max_length', truncation=True)

tokenized_data = dataset.map(token_function, batched=True)
tokenized_data.set_format(type='torch', columns=['input_ids', 'attention_mask', 'label'])

# Fine-tuning pre-trained model
