import re
from models import Settings


def slugify(text, delim=u'-'):
    _punct_re = re.compile(r'[\t !"#$%&\'()*\-/<=>?@\[\\\]^_`{|},.]+')
    """Generates an ASCII-only slug."""
    result = []
    for word in _punct_re.split(text.lower()):
        if word:
            result.append(word)
    return delim.join(result)

def get_current_settings():
    try:
        current_settings = Settings.get(Settings.id == 1)
    except Settings.DoesNotExist:
        current_settings = Settings.create(blog_title="Blog",
                                           initialized=True,
                                           icon_1_link='',
                                           icon_1_icon_type='github',
                                           icon_2_link='',
                                           icon_2_icon_type='linkedin',
                                           posts_per_page=10,
                                           max_synopsis_chars=500,
                                           table_entries_per_page=14)
        current_settings.save()
    return current_settings


