# Generated by Django 4.0.4 on 2022-04-14 12:33

import markdownx.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0002_classroom_topic_message_classroom_topic"),
    ]

    operations = [
        migrations.AlterField(
            model_name="message",
            name="body",
            field=markdownx.models.MarkdownxField(),
        ),
    ]
