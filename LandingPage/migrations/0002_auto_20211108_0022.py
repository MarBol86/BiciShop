# Generated by Django 3.2.9 on 2021-11-08 00:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('LandingPage', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pagina',
            name='secciones',
        ),
        migrations.AddField(
            model_name='secciones',
            name='pagina',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='LandingPage.pagina'),
            preserve_default=False,
        ),
    ]
