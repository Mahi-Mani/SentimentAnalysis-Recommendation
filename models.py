# -*- coding: utf-8 -*-
"""
Created on Tue Nov 12 15:59:34 2024

@author: mmahi
"""
from datasets import load_dataset
from transformers import DistilBertTokenizer
from transformers import DistilBertForSequenceClassification, Trainer, TrainingArguments

# Loading the datasets
dataset = load_dataset('imdb')
print(dataset['train'][0])

# Preprocessing the data
tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased')
def token_function(data):
    return tokenizer(data['text'], padding='max_length', truncation=True)

tokenized_data = dataset.map(token_function, batched=True)
tokenized_data.set_format(type='torch', columns=['input_ids', 'attention_mask', 'label'])

# Fine-tuning the pre-trained model
model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased', num_labels=2)
training_args = TrainingArguments(
    output_dir='./results',
    eval_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=16,
    num_train_epochs=3,
    weight_decay=0.01,
    )

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_data['train'],
    eval_dataset=tokenized_data['test'],
    )

trainer.train()