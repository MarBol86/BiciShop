# Generated by Django 3.2.9 on 2021-11-08 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LandingPage', '0002_auto_20211108_0022'),
    ]

    operations = [
        migrations.AddField(
            model_name='secciones',
            name='nombre',
            field=models.CharField(default='', max_length=40),
            preserve_default=False,
        ),
    ]
