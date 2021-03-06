# Generated by Django 4.0.4 on 2022-04-14 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0005_message_conspect"),
    ]

    operations = [
        migrations.AlterField(
            model_name="message",
            name="conspect",
            field=models.ImageField(null=True, upload_to="uploads/"),
        ),
        migrations.AlterField(
            model_name="user",
            name="avatar",
            field=models.ImageField(
                default="avatar.svg", null=True, upload_to="avatars/"
            ),
        ),
    ]
