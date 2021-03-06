# Generated by Django 4.0.4 on 2022-04-14 06:34

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Classroom",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("description", models.TextField(blank=True, null=True)),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                (
                    "host",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "students",
                    models.ManyToManyField(
                        blank=True, related_name="students", to=settings.AUTH_USER_MODEL
                    ),
                ),
            ],
            options={
                "ordering": ["-updated", "-created"],
            },
        ),
        migrations.CreateModel(
            name="Topic",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name="Message",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("body", models.TextField()),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                (
                    "classroom",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="base.classroom"
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "ordering": ["-updated", "-created"],
            },
        ),
        migrations.AddField(
            model_name="classroom",
            name="topic",
            field=models.ForeignKey(
                null=True, on_delete=django.db.models.deletion.SET_NULL, to="base.topic"
            ),
        ),
    ]
