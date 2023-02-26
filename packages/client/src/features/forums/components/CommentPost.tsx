import { Theme } from "@emotion/react"
import { FavoriteBorder, Reply, SentimentVeryDissatisfied } from "@mui/icons-material"
import { Avatar, Box, Divider, IconButton, Paper, SxProps, Tooltip, Typography } from "@mui/material"
import { BASE_URL } from "../../../app/api/variables"
import { Comment, ForumTopic, Topic, User } from "../types"

const postContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}

const postUsernameSx: SxProps<Theme> = {
  p: 2,
  pt: 3,
  pb: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const tooltipAttrs = {
  arrow: true,
  enterDelay: 1000,
  enterNextDelay: 1000,
}

export const CommentPost: React.FC<{
  isTopic?: boolean
  topic: Topic | Comment
}> = ({
  isTopic = false,
  topic
}) => {
  return (
    <Paper
      elevation={isTopic ? 4 : 1} 
      className="post" 
      sx={{ 
        display: 'flex', 
        mt: 2,
        backgroundColor: isTopic ? '#f5f5f5' : '',
      }}
    >
      <Box className="post__avatar" sx={{ pl: 2, pt: 2 }}>
        <Avatar
          src={`${BASE_URL}/resources${topic.user?.avatar}`} 
          variant="rounded" 
          sx={{ width: 64, height: 64 }}
        />
      </Box>
      <Box style={postContentStyle}>
        <Box sx={postUsernameSx}>
          <Box>
            <Typography variant="h5">
              {topic.user?.display_name || topic.user?.login || 'Anonymous'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'right' }}>
              #{ topic?.id || 0}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'right' }}>
              { topic?.datetime ? new Date(topic.datetime).toLocaleDateString() : ''}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ ml: 2, mr: 2 }} />
        <Box id="post__message" sx={{ p: 2, pt: 2 }}>
          <Box id="message__content">
            <Typography variant="body1">{topic?.message || ''}</Typography>
          </Box>
          <Box
            id="message__control"
            sx={{ display: 'flex', pt: 2, gap: 1 }}>
            <Tooltip title="Лайк" placement="left" {...tooltipAttrs}>
              <IconButton size="small" color="primary">
                <FavoriteBorder />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Ответить + цитата"
              placement="right"
              {...tooltipAttrs}>
              <IconButton size="small" color="primary">
                <Reply />
              </IconButton>
            </Tooltip>
            <Tooltip title="Жалоба" placement="left" {...tooltipAttrs}>
              <IconButton sx={{ ml: 'auto' }} size="small" color="error">
                <SentimentVeryDissatisfied />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}