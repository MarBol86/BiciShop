# Generated by Django 3.2.9 on 2021-11-14 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LandingPage', '0005_alter_secciones_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='secciones',
            name='redirect_to',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]